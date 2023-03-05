import axios from "axios";
import { useContext, useState } from "react";
import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import { api } from "../api";
import AuthContext from "../context/AuthContext";

const customStyles = {
  content: {
    outline: "none",
  },
  overlay: { zIndex: 999, backgroundColor: "#18191ab1" },
};

// console.log(event.base64);

const Avatar = ({ isOpenAvatar, setIsOpenAvatar }) => {
  const { user, updateData } = useContext(AuthContext);
  const [photo, setPhoto] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      setPhoto(base64Image);
    };
  };

  const sendImage = () => {
    if (photo.length > 0) {
      axios
        .post(`${api}/avatar/${user.id}`, { photo })
        .then((res) => {
          console.log(res);
          const user = JSON.parse(localStorage.getItem("user"));
          user.avatar = photo;
          updateData(user);
          setIsOpenAvatar(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Selecciona una imagen");
    }
  };
  return (
    <div>
      <Modal
        ariaHideApp={false}
        style={customStyles}
        className="z"
        isOpen={isOpenAvatar}
      >
        <div class="flex items-center justify-center w-3/4  mx-auto mt-48">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click para subir</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PNG o JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              onChange={handleImageUpload}
              class="hidden"
            />
          </label>
        </div>
        <div className="mt-10 text-center">
          <button onClick={sendImage} className="btn w-3/4 btn-success">
            Enviar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Avatar;
