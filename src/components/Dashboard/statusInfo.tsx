export interface IStatusInfo {
  text: string;
  value: string;
  className?: string;
}

const StatusInfo: React.FC<IStatusInfo> = (props) => {
  return (
    <div className={`${props.className} text-sm`}>
      <span className="mr-1">{props.text}</span>
      <span className="text-light-blue1 hover:text-light-blue2 hover:cursor-pointer">
        {props.value}
      </span>
    </div>
  );
};

export default StatusInfo;
