const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector(".form button");
const inp = wrapper.querySelector(".form input");
const img = wrapper.querySelector(".qr img");
btn.addEventListener("click", () => {
  let qr = inp.value;
  if (!qr) return;
  btn.innerText = "Generating QR Code...";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`;
  img.addEventListener("load", () => {
    wrapper.classList.add("active");
    btn.innerText = "Generate QR Code";
  });
});
inp.addEventListener("keyup", () => {
  if (!inp.value) {
    wrapper.classList.remove("active");
  }
});
