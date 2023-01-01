import Notiflix from "notiflix";


const TIMEOUT = 1000;

const NotificationWarning = (text = "Something went wrong") => {
  Notiflix.Notify.warning(text, {
    clickToClose: true,
    timeout: TIMEOUT,
  });
};

const NotificationFailure = (text = "Action failded") => {
Notiflix.Notify.failure(text, {
  clickToClose: true,
  timeout: TIMEOUT,
});
};

const NotificationSuccess = (text = "Action successfull") => {
Notiflix.Notify.success(text, {
  clickToClose: true,
  timeout: TIMEOUT,
});
};



export { NotificationWarning, NotificationFailure, NotificationSuccess };