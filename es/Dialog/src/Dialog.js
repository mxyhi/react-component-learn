import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { useRef as i, useEffect as d } from "react";
/* empty css                  */import { createPortal as c } from "react-dom";
const n = (l) => {
  const t = i(null);
  return d(() => {
    l.isShow == !0 ? t.current?.showModal() : t.current?.close();
  }, [l.isShow]), c(
    /* @__PURE__ */ e("dialog", { ref: t, className: "rounded", open: !0, children: /* @__PURE__ */ r("div", { className: "rounded", children: [
      /* @__PURE__ */ r("div", { className: "flex justify-end items-center", children: [
        /* @__PURE__ */ e("div", { children: l.title }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              t.current?.close(), l?.setShow?.(!1);
            },
            className: "bg-blue-500 rounded shadow px-2 py-1 active:bg-blue-600 text-white",
            children: "关闭"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-6", children: l.children })
    ] }) }),
    document.body
  );
};
n.defaultProps = {
  children: /* @__PURE__ */ e("div", { children: "这是内容" }),
  title: /* @__PURE__ */ e("h2", { children: "标题" })
};
export {
  n as default
};
