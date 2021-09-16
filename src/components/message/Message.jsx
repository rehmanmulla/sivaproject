import "./message.css";

export default function Message({ successMsg }) {
  return (
    <div className="message">
      <h3 className="messageTitle">{successMsg}</h3>
    </div>
  );
}
