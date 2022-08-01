import React, { Suspense } from "react";

export default function Main() {
  return (
    <div>
      <Suspense fallback={<>페이지 로딩중...</>}>
        <div>메인페이지</div>
      </Suspense>
    </div>
  );
}
