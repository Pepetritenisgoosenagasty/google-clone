import Loader from "react-loader-spinner";

export const Loading = () => {
    return(
        <div className="flex justify-center items-center">
          <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
        </div>
    )
}