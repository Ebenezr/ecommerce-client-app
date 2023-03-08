"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import useStore from "@/store/useStore";
import { useGetFromStore } from "@/utils/hooks/zustandHook";
import useCustomPatchMutation from "@/utils/hooks/patchRequest";
import useCustomPostMutation from "@/utils/hooks/postRequest";
import { Product } from "@/type";
import Image from "next/image";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalForm = () => {
  const queryClient = useQueryClient();
  const [categoryId, setCategoryId] = useState<number>(1);
  const [picture, setPicture] = useState<null | any>(null);
  const isModalOpen = useGetFromStore(useStore, (state) => state.isModalOpen);
  const isEditable = useGetFromStore(useStore, (state) => state.isEditable);
  const currentProduct = useGetFromStore(
    useStore,
    (state) => state.currentProduct
  );
  const {
    data: patchData,
    isLoading: patchLoading,
    error: patchError,
    mutate: patch,
  } = useCustomPatchMutation<any>(
    `https://esoko-server.onrender.com/api/product/${currentProduct?.id}`
  );
  const {
    data: postData,
    isLoading: postLoading,
    error: postError,
    mutate: post,
  } = useCustomPostMutation(`https://esoko-server.onrender.com/api/products`);

  const [CloseModal, OpenModal] = useStore((state) => [
    state.CloseModal,
    state.OpenModal,
  ]);

  const FormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().optional(),
    price: z.number().min(1, { message: "Price is required" }),
    rating: z
      .number()
      .min(1, { message: "Rating is required" })
      .max(5, { message: "Rating max(5) exceeded" }),
    image: z.unknown(),
    size: z.string(),
    productCategoryId: z.number(),
    discount: z.number(),
    sponsored: z.boolean(),
    color: z.string(),
    supplier: z.string(),
  });
  // extracting the type
  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: currentProduct?.name ?? "",
      price: currentProduct?.price ?? 0,
      description: currentProduct?.description ?? "",
      rating: currentProduct?.rating ?? 0,
      supplier: currentProduct?.supplier ?? "",
      color: currentProduct?.color ?? "",
      productCategoryId: currentProduct?.productCategoryId ?? 0,
    },
  });

  function handleCategoryChange(event: any) {
    setCategoryId(event.target.value);
  }

  const onChangePicture = (e: any) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    if (currentProduct) {
      setValue("name", currentProduct?.name);
      setValue("price", currentProduct?.price);
      setValue("description", currentProduct?.description);
      currentProduct?.rating && setValue("rating", currentProduct?.rating);
      setValue("supplier", currentProduct?.supplier);
      currentProduct?.color && setValue("color", currentProduct?.color);
      setValue("productCategoryId", currentProduct?.productCategoryId);
    }
  }, [currentProduct, setValue]);
  // form submission
  const onSubmit: SubmitHandler<FormSchemaType> = async (data: any) => {
    // console.log(data);
    try {
      FormSchema.parse(data);
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("rating", data.rating);
      formData.append("size", data.size);
      formData.append("productCategoryId", data.productCategoryId);
      formData.append("discount", data.discount);
      formData.append("sponsored", data.sponsored);
      formData.append("color", data.color);
      formData.append("supplier", data.supplier);
      formData.append("image", data.image[0]);
      console.log(formData);
      if (isEditable === true) {
        patch(formData);
        if (patchData) {
          toast.info(`Product Saved Successfully`, {
            position: "bottom-left",
          });
        }
      } else {
        post(formData);
        if (postData) {
          toast.info(`Product Added Successfully`, {
            position: "bottom-left",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isModalOpen) return null;
  return (
    <motion.div
      className="w-screen h-[100vw] absolute bg-gray-300/50 z-30 grid place-items-center"
      onClick={CloseModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="z-40 fixed bg-white h-[70vh] w-1/2  top-24 translate-y-1/2 rounded-lg overflow-hidden mx-auto flex flex-col shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ width: "clamp(40%, 400px, 60%)" }}
      >
        <header className="border-b-2 border-b-gray-300 h-12 flex items-center shrink-0 px-2 justify-between">
          <h2 className="font-bold text-gray-500">Product Info</h2>
          <button className="px-2" onClick={CloseModal}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="hidden">x</p>
            </span>
          </button>
        </header>
        <article className="flex-1 px-4 py-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div className="grid grid-cols-2 gap-3 mt-4 items-center ">
              <span className="w-full ">
                <input
                  type="text"
                  id="name"
                  placeholder="Product Name"
                  className=" w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </span>
              <span className="w-full">
                <select
                  className=" border-0 py-3 bg-slate-50 px-2 text-gray-700 w-full rounded placeholder:text-gray-600"
                  id="productCategoryId"
                  {...register("productCategoryId", { valueAsNumber: true })}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a Category</option>
                  {categories instanceof Array
                    ? categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))
                    : null}
                </select>
                {errors.productCategoryId && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.productCategoryId.message}
                  </p>
                )}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 items-center ">
              <span className="w-full">
                <input
                  type="number"
                  id="price"
                  placeholder="Product Price"
                  className=" w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("price", { valueAsNumber: true })}
                />
                {errors.price && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.price.message}
                  </p>
                )}
              </span>
              <span className="w-full">
                <input
                  type="number"
                  id="rating"
                  placeholder="Product Rating"
                  className=" w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("rating", { valueAsNumber: true })}
                />
                {errors.rating && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.rating.message}
                  </p>
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 items-center ">
              <span>
                <input
                  type="text"
                  id="size"
                  placeholder="Product Size"
                  className="w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("size")}
                />
                {errors.size && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.size.message}
                  </p>
                )}
              </span>
              <span>
                <input
                  type="text"
                  id="color"
                  placeholder="Product Color"
                  className="w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("color")}
                />
                {errors.color && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.color.message}
                  </p>
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 items-center ">
              <span>
                <input
                  type="number"
                  id="discount"
                  placeholder="Product Discount"
                  className="w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                  {...register("discount", { valueAsNumber: true })}
                />
                {errors.discount && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.discount.message}
                  </p>
                )}
              </span>
              <span className="mt-3 flex items-center justify-between bg-white py-3 px-2 rounded">
                <label htmlFor="defaultAdd" className="text-gray-600">
                  Sponsored product?
                </label>
                <input
                  type="checkbox"
                  id="sponsored"
                  className=" "
                  {...register("sponsored")}
                />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 items-center ">
              <span className="w-full ">
                <input
                  type="file"
                  id="image"
                  className="w-full border-0 py-3 px-2 text-gray-700 rounded bg-slate-50"
                  accept="image/*"
                  {...register("image", { required: true })}
                  onChange={onChangePicture}
                />
                {errors.image && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.image.message}
                  </p>
                )}
              </span>
              <div className="grid place-items-center grow-0 rounded bg-slate-50">
                {picture && (
                  <Image
                    className="h-12 grow-0"
                    src={picture && picture}
                    alt="preview"
                    width={100}
                    height={40}
                  />
                )}
              </div>
            </div>
            <span>
              <input
                type="text"
                id="supplier"
                placeholder="Product Supplier"
                className="w-full border-0 py-3 mt-3 px-2 text-gray-700 rounded  bg-slate-50"
                {...register("supplier")}
              />
              {errors.supplier && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.supplier.message}
                </p>
              )}
            </span>
            <span className="flex-1">
              <textarea
                id="description"
                placeholder="Product Description"
                className="mt-4 w-full border-0 py-3 px-2 text-gray-700 rounded  bg-slate-50"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.description.message}
                </p>
              )}
            </span>
            <footer className=" w-full py-3 grid grid-cols-2 items-center gap-3 ">
              <button
                type="submit"
                className=" rounded  bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 py-3 font-semibold text-white"
                disabled={postLoading}
              >
                {/* Todo: refactor this spaghetti */}
                {isEditable === true && patchLoading === true
                  ? "Saving"
                  : isEditable === true && patchLoading === false
                  ? "Save Product"
                  : null || (postLoading === true && isEditable === false)
                  ? "Adding Product"
                  : postLoading === false && isEditable === false
                  ? "Add Product"
                  : null}
              </button>
              <button
                className="bg-red-500 text-white px-4 py-3 rounded"
                onClick={() => {
                  CloseModal();
                  queryClient.invalidateQueries([
                    "https://esoko-server.onrender.com/api/products",
                  ]);
                }}
              >
                Close
              </button>
            </footer>
          </form>
        </article>
        {/* <footer className=" w-full bg-gray-100 py-3 flex items-center gap-3 justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {!true ? "Saving..." : "Save"}
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={CloseModal}
          >
            Close
          </button>
        </footer> */}
      </motion.section>
    </motion.div>
  );
};

export default ModalForm;

const categories = [
  { id: 12, name: "Phones" },
  { id: 13, name: "Laptops" },
  { id: 3, name: "Cooking" },
];
