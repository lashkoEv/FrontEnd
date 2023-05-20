/*
 * Task 1
 * создать функцию, которая принимает callback и возвращает promise его выполнения.
 */

const simpleCallbackForTask1 = (resolve, reject) => {
  resolve();
};

const task1 = (callback) => {
  return new Promise(callback);
};

const task1Demo = () => {
  task1(simpleCallbackForTask1);
};

/*
 * Task 2
 * создать функцию, которая принимает callback и время задержки его выполнения, возвращает Promise его выполнения
 * (callback выполнится через указанное время, следовательно и его Promise).
 * По выполнению переданного callback - выдать в консоль сообщение "done" используя then/catch
 */

const simpleCallbackForTask2 = () => {
  console.log("Simple callback for task 2");
};

const task2 = (callback, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();
    }, timeout);
  });
};

const task2Demo = () => {
  const promise = task2(simpleCallbackForTask2, 1000);

  promise.then(() => {
    console.log("Done");
  });
};

/*
 * Task 3
 * создать функцию возвращающую промис, который выполнится через рандомное время(1-3 секунды)
 * с 50% шанса успешного(resolve) выполнения, вернет строку "task done".
 * В случае не успеха(rejecft) вернет сообщение "processor overload".
 * Текст результат выдать в консоль используя async/await.
 */

const getRandomTime = () => {
  return Math.floor(Math.random() * 3 + 1) * 1000;
};

const getChance = () => {
  return Boolean(Math.floor(Math.random() * 2));
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getChance()) {
        resolve("Task done!");
      } else {
        reject("Processor overload...");
      }
    }, getRandomTime());
  });
};

const task3Demo = async () => {
  try {
    let result = await task3();

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const app = () => {
  task1Demo();
  task2Demo();
  task3Demo();
};

app();
