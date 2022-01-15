function HeadingContainer({ children, right, marginTop }) {
  return (
    <>
      <div className="heading-container" style={{ marginTop }}>
        {children}
      </div>
    </>
  );
}

export default HeadingContainer;
