export default function IconButton(props) {
  const { buttonName, handleClick } = props;
  return (
    <div className="icon-button" onClick={handleClick}>{buttonName}</div>
  )
}
