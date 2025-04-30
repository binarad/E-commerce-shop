import { Link } from "react-router";

export default function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <span>
          <Link to={"/"}>HOME</Link>
        </span>
      </div>
      {/* <p>This is Navigation Tab component</p> */}
      <input type="text" />
    </div>
  );
}
