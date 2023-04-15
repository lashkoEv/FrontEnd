//   - модуль отмечающий людей для увольнения

export const markingForDismissal = (data, blackList) => {
  data.forEach((employee) => {
    if (blackList.includes(employee)) {
      employee.dismiss = true;
    } else {
      employee.dismiss = false;
    }
  });
};
