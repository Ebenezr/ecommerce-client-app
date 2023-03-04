interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="h-full grid place-items-center">
      <div style={{ width: `20px`, height: `20px` }} className="animate-spin">
        <div
          className="h-full w-full border-4 border-t-blue-200
       border-b-blue-500 rounded-[50%]"
        ></div>
      </div>
    </section>
  );
};
export default Loading;
