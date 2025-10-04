import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";

interface CoursesLayoutProps {
  children: ReactNode;
  params: { cid: string } | Promise<{ cid: string }>;
}

export default async function CoursesLayout({
  children,
  params,
}: CoursesLayoutProps) {
  // Await params if it's a Promise
  const { cid } = params instanceof Promise ? await params : params;

  return (
    <div id="wd-courses" className="p-3">
      <h2 className="text-danger mb-3 d-flex align-items-center">
        <FaAlignJustify className="me-3 fs-4" />
        Course {cid}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar */}
        <div className="d-none d-md-block pe-3" style={{ width: "200px" }}>
          <CourseNavigation />
        </div>

        {/* Main content */}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
