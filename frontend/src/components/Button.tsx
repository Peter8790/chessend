export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "2.5em",
        fontWeight: "bold",
        backgroundColor: "#F28500",
        borderRadius: "15px",
      }}
    >
      {children}
    </button>
  );
};
