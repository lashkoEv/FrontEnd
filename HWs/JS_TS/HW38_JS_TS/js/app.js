//   - главный модуль, запускающий функции всех остальных

"use strict";

import { getBackList } from "./Components/BlackList/BlackList.js";
import { convertEmployees } from "./Components/ConvertEmployees/ConvertEmployees.js";
import { data } from "./Components/Data/Data.js";
import { drawEmployees } from "./Components/DrawEmployees/DrawEmployees.js";
import { markingForDismissal } from "./Components/MarkingForDismissal/MarkingForDismissal.js";

const app = () => {
  const convertedEmployees = convertEmployees(data);

  const { backList, surnames } = getBackList(convertedEmployees);

  markingForDismissal(convertedEmployees, backList);

  drawEmployees(convertedEmployees, surnames);
};

app();
