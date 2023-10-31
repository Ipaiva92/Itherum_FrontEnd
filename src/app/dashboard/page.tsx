import variables from "@/app/variables.module.scss";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div>
      {" "}
      <div
        className="topNavBar"
        style={{ backgroundColor: variables.secondaryColor }}
      >
        Teste
      </div>
      <div
        className="leftNavBar"
        style={{ backgroundColor: variables.primaryColorVariant }}
      >
        <a>Teste</a>
        <a>Teste</a>
        <a>Teste</a>
      </div>
    </div>
  );
}
