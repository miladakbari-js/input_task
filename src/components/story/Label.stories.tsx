import React from "react";

import { LabelProps } from '@/components/text-input/types';
import Label from "../ui/label";

export default {
  title: "Components/Label",
  component: Label,
};

export const Default = () => <Label label=" ایمیل" className="text-gray-700 text-sm font-medium" />;

export const Highlighted = () => <Label label="پسورد" className="text-red-500 text-lg font-bold" />;
