/// <reference types="react-scripts" />

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

namespace JSX {
  interface IntrinsicElements {
    ["htf-2022"]: CustomElement<any>;
  }
}