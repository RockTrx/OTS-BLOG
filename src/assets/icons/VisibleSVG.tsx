interface Props {
  onClick: () => void;
}

const VisibleSVG: React.FC<Props> = ({ onClick }) => {
  return (
    <svg
      style={{ opacity: 0.5 }}
      onClick={(event) => {
        event.currentTarget.classList.toggle("show-password");
        onClick();
      }}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/bold/eye">
        <path
          id="Vector"
          d="M20.1356 6.53158C17.7293 2.75032 14.2085 0.573242 10.5002 0.573242C8.646 0.573242 6.84391 1.11491 5.19808 2.12533C3.55225 3.14616 2.07308 4.63574 0.864746 6.53158C-0.176921 8.16699 -0.176921 10.8232 0.864746 12.4587C3.271 16.2503 6.79183 18.417 10.5002 18.417C12.3543 18.417 14.1564 17.8753 15.8022 16.8649C17.4481 15.8441 18.9272 14.3545 20.1356 12.4587C21.1772 10.8337 21.1772 8.16699 20.1356 6.53158ZM10.5002 13.7087C8.16683 13.7087 6.29183 11.8232 6.29183 9.50033C6.29183 7.17741 8.16683 5.29199 10.5002 5.29199C12.8335 5.29199 14.7085 7.17741 14.7085 9.50033C14.7085 11.8232 12.8335 13.7087 10.5002 13.7087Z"
        />
        <path
          id="Vector_2"
          d="M10.5 6.52148C8.86458 6.52148 7.53125 7.85482 7.53125 9.50065C7.53125 11.1361 8.86458 12.4694 10.5 12.4694C12.1354 12.4694 13.4792 11.1361 13.4792 9.50065C13.4792 7.86523 12.1354 6.52148 10.5 6.52148Z"
        />
      </g>
    </svg>
  );
};

export default VisibleSVG;