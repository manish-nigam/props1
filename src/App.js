import "./styles.css";
import Card from "./component/Card";
export default function App() {
  return (
    <div className="App">
      <div className='inner'>
     <Card colorname="PINK" colorCode="#FF6663" />
     <Card colorname="GREY" colorCode="#333" />
     <Card colorname="BLACK" colorCode="#000" />
     <Card colorname="GREEN" colorCode="#38BB14" />
     <Card colorname="RED" colorCode="#C90B0B" />
     <Card colorname="ORANGE" colorCode="#FF8000" />
     <Card colorname="YELLOW" colorCode="#FFF500" />
     <Card colorname="LIGHT GREY" colorCode="#CCCC" />
     <Card colorname="PURPLE" colorCode="#7E41A2" />
     <Card colorname="BROWN" colorCode="#C14911" />
       </div>
    </div>
  );
}
