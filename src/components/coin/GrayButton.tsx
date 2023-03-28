export interface IButton {
  text: string;
  active?: boolean;
}

const GrayButton: React.FC<IButton> = (props = { text: "", active: false }) => {
  return (
    <div
      className={`${
        props.active ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-600"
      } hover:bg-gray-600 rounded-xl px-4`}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default GrayButton;
