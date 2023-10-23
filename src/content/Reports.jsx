import { Outlet } from "react-router-dom";

const reportStyles = "flex justify-center items-center text-8xl"

export const Reports = () => {
  return (
    <>
      <div className={`${reportStyles} h-[40vh]`}>
        Reports
      </div>
      <Outlet />
    </>
  )
}

export const ReportOne = () => {
  return (
    <div className={reportStyles}>
      First report
    </div>
  );
};

export const ReportTwo = () => {
  return (
    <div className={reportStyles}>
      Second report
    </div>
  );
};

export const ReportThree = () => {
  return (
    <div className={reportStyles}>
      Third report
    </div>
  );
};
