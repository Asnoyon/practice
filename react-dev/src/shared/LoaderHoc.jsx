function LoaderHoc(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Hold on fetching data might take sometime...</p>;
    return <Component {...props} />;
  };
}

export default LoaderHoc;
