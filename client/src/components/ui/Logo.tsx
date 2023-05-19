import { FC } from "react";

const Logo: FC = () => {
  return (
    <>
      <div className="hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 32"
          fill="none"
          preserveAspectRatio="xMinYMid slice"
          height="32"
        >
          <rect width="32" height="32" fill="#DE483A" rx="5.12"></rect>
          <path
            fill="#ffffff"
            d="m6.764 14.993 6.374-3.668.008-.005 6.568-3.78c.277-.16.29-.65-.02-.828l-.217-.124c-.317-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.09-10.501 6.038-10.847 6.235a1.349 1.349 0 0 1-1.339 0L-.072 9.144v2.699l.056.032c1.364.795 4.592 2.675 5.382 3.12.479.27.937.264 1.398-.002Z"
          ></path>
          <path
            fill="#ffffff"
            d="m6.764 20.385 6.366-3.664.024-.014 6.56-3.775c.277-.16.29-.651-.02-.828l-.217-.124c-.316-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.089-10.501 6.038-10.847 6.234a1.349 1.349 0 0 1-1.339 0c-.326-.188-5.464-3.174-5.464-3.174v2.698l.056.033c1.365.795 4.592 2.674 5.382 3.12.479.27.937.264 1.398-.002Z"
          ></path>
          <path
            fill="#ffffff"
            d="m13.139 22.108-6.375 3.669c-.461.266-.92.272-1.398.002-.79-.446-4.017-2.325-5.382-3.12l-.056-.033v-2.698l5.464 3.174c.413.239.925.236 1.339 0 .346-.196 10.692-6.145 10.847-6.235a1.02 1.02 0 0 1 .997-.012 125.007 125.007 0 0 0 1.12.64c.31.178.296.669.019.829l-6.575 3.784Z"
          ></path>
          <g>
            <path
              fill="#DE483A"
              d="M55.65 18.73c0 .515.089 1.015.264 1.492.176.481.432.904.774 1.273.342.37.751.664 1.23.884.48.221 1.025.331 1.632.331.608 0 1.152-.11 1.631-.33a3.768 3.768 0 0 0 2.005-2.158c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.779 3.779 0 0 0-.774-1.271 3.863 3.863 0 0 0-1.23-.885 3.865 3.865 0 0 0-1.632-.333c-.607 0-1.152.113-1.631.333-.48.221-.889.516-1.23.885a3.74 3.74 0 0 0-.775 1.27c-.175.48-.263.98-.263 1.495Zm-3.316 0c0-1.05.19-2.005.567-2.862a6.665 6.665 0 0 1 1.535-2.198 6.78 6.78 0 0 1 2.293-1.411 8 8 0 0 1 2.821-.497c.995 0 1.935.166 2.82.497a6.81 6.81 0 0 1 2.294 1.41 6.689 6.689 0 0 1 1.535 2.199c.378.857.567 1.811.567 2.862 0 1.05-.19 2.005-.567 2.862a6.688 6.688 0 0 1-1.535 2.198A6.766 6.766 0 0 1 62.37 25.2a7.934 7.934 0 0 1-2.819.497 7.946 7.946 0 0 1-2.821-.497 6.735 6.735 0 0 1-2.293-1.409 6.664 6.664 0 0 1-1.535-2.198c-.378-.857-.567-1.811-.567-2.862ZM71.63 18.734c0 .515.087 1.015.263 1.492.175.481.431.904.773 1.273.342.37.752.664 1.231.884.48.22 1.024.331 1.631.331.608 0 1.152-.11 1.632-.33a3.762 3.762 0 0 0 2.005-2.158 4.35 4.35 0 0 0 .26-1.492c0-.515-.087-1.015-.26-1.494a3.772 3.772 0 0 0-2.005-2.156 3.864 3.864 0 0 0-1.632-.333c-.607 0-1.152.113-1.63.333a3.86 3.86 0 0 0-1.232.885c-.341.369-.598.792-.773 1.27-.176.48-.264.98-.264 1.495Zm7.852 4.644h-.057c-.479.812-1.122 1.402-1.934 1.77a6.292 6.292 0 0 1-2.626.552c-1.033 0-1.949-.178-2.752-.538a6.162 6.162 0 0 1-2.059-1.48 6.311 6.311 0 0 1-1.3-2.212 8.26 8.26 0 0 1-.441-2.736 7.8 7.8 0 0 1 .47-2.738 6.813 6.813 0 0 1 1.312-2.212 6.076 6.076 0 0 1 2.031-1.478c.794-.36 1.66-.54 2.6-.54.627 0 1.18.065 1.66.193.479.13.902.295 1.27.5a4.807 4.807 0 0 1 1.575 1.325h.084V6.473c0-.331.263-.722.724-.722h1.873c.434 0 .722.364.722.722v18.173c0 .462-.391.723-.722.723h-1.705a.732.732 0 0 1-.725-.721v-1.27ZM88.157 18.73c0 .515.088 1.015.264 1.492.175.481.432.904.774 1.273a3.85 3.85 0 0 0 1.23.884c.48.221 1.024.331 1.632.331.607 0 1.152-.11 1.631-.33a3.763 3.763 0 0 0 2.005-2.158c.173-.477.26-.977.26-1.492s-.087-1.015-.26-1.494a3.774 3.774 0 0 0-2.005-2.156 3.866 3.866 0 0 0-1.631-.333c-.608 0-1.153.113-1.632.333-.479.221-.888.516-1.23.885-.342.369-.599.792-.774 1.27-.176.48-.264.98-.264 1.495Zm-3.316 0c0-1.05.189-2.005.567-2.862a6.663 6.663 0 0 1 1.534-2.198 6.78 6.78 0 0 1 2.293-1.411 8 8 0 0 1 2.822-.497c.994 0 1.935.166 2.819.497a6.81 6.81 0 0 1 2.295 1.41 6.689 6.689 0 0 1 1.534 2.199c.378.857.568 1.811.568 2.862 0 1.05-.19 2.005-.567 2.862a6.688 6.688 0 0 1-1.535 2.198 6.766 6.766 0 0 1-2.295 1.409 7.934 7.934 0 0 1-2.82.497 7.946 7.946 0 0 1-2.82-.497 6.736 6.736 0 0 1-2.294-1.409 6.662 6.662 0 0 1-1.534-2.198c-.378-.857-.567-1.811-.567-2.862ZM100.945 7.588c0-.535.198-.999.594-1.398.398-.395.9-.594 1.507-.594.608 0 1.121.19 1.535.568.414.378.623.852.623 1.424a1.85 1.85 0 0 1-.623 1.424c-.414.378-.927.567-1.535.567-.607 0-1.109-.198-1.507-.596-.396-.396-.594-.86-.594-1.395ZM114.64 15.77c-.331 0-.575-.25-.616-.359-.276-.723-1.155-.994-1.865-.994-1.119 0-1.997.519-1.997 1.41 0 .863.85 1.04 1.375 1.199.576.174 1.677.414 2.284.557a7.419 7.419 0 0 1 1.728.636c1.761.915 2.012 2.354 2.012 3.22 0 3.197-3.167 4.257-5.366 4.257-1.695 0-4.879-.257-5.578-3.488-.068-.315.21-.798.721-.798h1.832c.36 0 .603.263.674.47.235.649.983 1.14 2.245 1.14 1.353 0 2.153-.537 2.153-1.251 0-.462-.261-.872-.603-1.104-1.026-.696-3.564-.774-4.942-1.508-.528-.28-1.852-.922-1.852-3.109 0-3.015 2.741-4.286 5.149-4.286 3.551 0 4.854 2.243 5.001 3.075.081.459-.176.934-.692.934h-1.663ZM117.833 14.129v-1.373c0-.327.258-.721.717-.721h1.769v-3.37c0-.36.244-.58.429-.66l1.89-.825c.552-.227.999.228.999.666v4.189h2.928c.453 0 .722.395.722.721v1.375a.745.745 0 0 1-.721.723h-2.929v5.808c0 .663-.018 1.182.235 1.565.233.351.574.482 1.257.482.196 0 .371-.033.519-.083a.706.706 0 0 1 .868.317c.216.418.463.877.636 1.206.191.361.037.825-.311.993-.561.273-1.339.494-2.406.494-.884 0-1.385-.096-1.945-.29a3.347 3.347 0 0 1-1.417-1c-.324-.396-.484-.926-.604-1.516-.122-.59-.15-1.304-.15-2.08v-5.896h-1.765c-.463 0-.721-.4-.721-.725ZM41.928 14.129v-1.373c0-.327.259-.721.717-.721h2.021v-3.37c0-.36.245-.58.43-.66l1.89-.825c.552-.227.999.228.999.666v4.189h2.928c.452 0 .722.395.722.721v1.375a.745.745 0 0 1-.722.723h-2.928v5.808c0 .663-.018 1.182.235 1.565.232.351.573.482 1.257.482.196 0 .37-.033.519-.083a.706.706 0 0 1 .867.317c.217.418.464.877.637 1.206.19.361.037.825-.311.993-.562.273-1.34.494-2.406.494-.884 0-1.385-.096-1.945-.29a3.351 3.351 0 0 1-1.418-1c-.324-.396-.484-.926-.603-1.516-.122-.59-.15-1.304-.15-2.08v-5.896H42.65c-.463 0-.722-.4-.722-.725ZM102.115 25.37h1.876a.723.723 0 0 0 .721-.723v-11.89a.723.723 0 0 0-.721-.722h-1.876a.724.724 0 0 0-.721.722v11.89c0 .398.325.722.721.722Z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="none"
          preserveAspectRatio="xMinYMid slice"
          height="32"
        >
          <rect width="32" height="32" fill="#DE483A" rx="5.12"></rect>
          <path
            fill="#ffffff"
            d="m6.764 14.993 6.374-3.668.008-.005 6.568-3.78c.277-.16.29-.65-.02-.828l-.217-.124c-.317-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.09-10.501 6.038-10.847 6.235a1.349 1.349 0 0 1-1.339 0L-.072 9.144v2.699l.056.032c1.364.795 4.592 2.675 5.382 3.12.479.27.937.264 1.398-.002Z"
          ></path>
          <path
            fill="#ffffff"
            d="m6.764 20.385 6.366-3.664.024-.014 6.56-3.775c.277-.16.29-.651-.02-.828l-.217-.124c-.316-.18-.727-.414-.902-.516a1.02 1.02 0 0 0-.997.012c-.155.089-10.501 6.038-10.847 6.234a1.349 1.349 0 0 1-1.339 0c-.326-.188-5.464-3.174-5.464-3.174v2.698l.056.033c1.365.795 4.592 2.674 5.382 3.12.479.27.937.264 1.398-.002Z"
          ></path>
          <path
            fill="#ffffff"
            d="m13.139 22.108-6.375 3.669c-.461.266-.92.272-1.398.002-.79-.446-4.017-2.325-5.382-3.12l-.056-.033v-2.698l5.464 3.174c.413.239.925.236 1.339 0 .346-.196 10.692-6.145 10.847-6.235a1.02 1.02 0 0 1 .997-.012 125.007 125.007 0 0 0 1.12.64c.31.178.296.669.019.829l-6.575 3.784Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Logo;
