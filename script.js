const apiEp = "https://randomuser.me/api/?results=2";
const slider = document.getElementById("mySlider");
let userList = [];
slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 70) {
    label.textContent = "";
    dispalyAppscreen();
  } else {
    label.textContent = "Slide to unlock";
  }
});

const dispalyAppscreen = () => {
  document.querySelector(".homeScreen").style.display = "none";
  document.querySelector(".appScreen").style.display = "block";
};

const fetchUsers = async (url) => {
  // fetch user
  // promise method
  /*
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
    */
  // async await
  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;

  // hide the spinner
  document.querySelector(".showSpinner").style.display = "none";
  // show the users
  displayContactList(userList);
};

const displayContactList = (userList) => {
  document.getElementById("list").style.display = "block";
  console.log(userList);

  let str = "";

  userList.map((item, i) => {
    const add =
      item.location.street.number +
      " " +
      item.location.street.name +
      " " +
      item.location.city;
    const nam = item.name.first + " " + item.name.last;
    str += `  <div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse${i}"
      aria-expanded="false"
      aria-controls="collapse${i}"
    >
      <img
        src="${item.picture.thumbnail}"
        alt="some"
        width="50px"
        class="rounded-circle"
      />
      <div class="ms-2">
        <div class="fw-bolder">${item.name.title + " " + nam}</div>
        <small>${add}</small>
      </div>
    </button>
  </h2>
  <div
    id="collapse${i}"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div
      class="accordion-body d-flex flex-column align-items-center"
    >
      <img
        src="${item.picture.large}"
        alt="some"
        width="150px"
        class="rounded-circle"
      />
      <div>
        <div class="fw-bolder">
          <i class="bi bi-person"></i>
          ${nam}
        </div>
        <div>
          <a href="tel:${item.phone[0]}"
            ><i class="bi bi-phone"></i>654654</a
          >
        </div>
        <div>
          <a href="mailto:${item.email}"
            ><i class="bi bi-envelope"></i>fasf@dfsa.com</a
          >
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/${add},${
      item.location.city + item.location.state + item.location.postcode
    }"
            target="_blank"
          >
            <i class="bi bi-globe-central-south-asia"></i
            >${add}</a
          >
        </div>
      </div>
    </div>
  </div>
</div>`;
  });

  document.getElementById("userAccordion").innerHTML = str;
};

fetchUsers(apiEp);
