import HomepageAllBtns from "../components/Homepage/HomepageAllBtns";
import LogInCmp from "../components/LogIn/LogInCmp";

export default function LogIn() {
  return (
    <main className="mainBox" style={{ backgroundColor: "rgb(45, 52, 57)" }}>
      <HomepageAllBtns />

      <LogInCmp />
    </main>
  );
}
