import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./weather/weather.css";

function Forecast({ dataFromAPI }) {
  if (!dataFromAPI.list && true) {
    return (
      <>
        <h1>API error?</h1>
        {/* API ERROR FOR SOME REASON NOT MY FAULT */}
        <h2>
          {" "}
          {dataFromAPI.message} {dataFromAPI.cod}{" "}
        </h2>
      </>
    );
  }
  return (
    <>
      <h1>HIIII</h1>
      <Accordion allowZeroExpanded>
        {dataFromAPI.list.splice(0, 7).map((item, idx) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton></AccordionItemButton>
              {/* REQUIRED ^^^*/}
            </AccordionItemHeading>
            <AccordionItemPanel>
              {/* PUT DATA HERE
            FOR EX.
            <span className="parameter-label"> Exei peripou </span>{" "}
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.feels_like)} deg{" "}
            </span>{" "}
            */}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
