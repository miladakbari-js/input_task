import { LabelProps } from "./types";


function Label({ label, className }: LabelProps) {
  return <label className={className}>{label}</label>;
}

export default Label;
