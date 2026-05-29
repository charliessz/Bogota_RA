/* Elementos A-Frame usados en ARBackground */
declare namespace JSX {
  interface IntrinsicElements {
    "a-scene": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      embedded?: boolean;
      "vr-mode-ui"?: string;
      arjs?: string;
      renderer?: string;
    };
    "a-marker": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      type?: string;
      url?: string;
      preset?: string;
      emitevents?: boolean | string;
      id?: string;
    };
    "a-entity": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      camera?: boolean | string;
      position?: string;
      scale?: string;
      rotation?: string;
    };
    "a-plane": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      position?: string;
      rotation?: string;
      width?: string | number;
      height?: string | number;
      color?: string;
    };
    "a-cylinder": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      position?: string;
      radius?: string | number;
      height?: string | number;
      color?: string;
    };
    "a-sphere": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      position?: string;
      radius?: string | number;
      color?: string;
    };
    "a-box": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      position?: string;
      depth?: string | number;
      height?: string | number;
      width?: string | number;
      color?: string;
    };
  }
}
