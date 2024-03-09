// 1. создать функцию, которая принимает callback и возвращает promise его выполнения.

// 2. создать функцию, которая принимает callback и время задержки его выполнения, возвращает Promise его выполнения
// (callback выполнится через указанное время, следовательно и его Promise).
// По выполнению переданного callback - выдать в консоль сообщение "done" используя then/catch

// 3. создать функцию возвращающую промис, который выполнится через рандомное время(1-3 секунды) с 50% шанса успешного(resolve) выполнения, вернет строку "task done".
// В случае не успеха(rejecft) вернет сообщение "processor overload".
// Текст результат выдать в консоль используя async/await.

const simpleCallback = (resolve, reject) => {
  resolve();
};

const task1 = (callback) => {
  return new Promise(callback);
};

const simpleCallback2 = () => {
  console.log("simpleCallback2");
};

const task2 = (callback, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();
    }, timeout);
  });
};

const app = () => {
    task1(simpleCallback);

  const pr = task2(simpleCallback2, 1000);

  pr.then(() => {
    console.log("Done");
  });
};

app();
