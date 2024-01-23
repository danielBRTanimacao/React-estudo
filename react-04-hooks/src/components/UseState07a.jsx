export default ({ funcInc, funcDec }) => {
    return (
        <>
            <hr />
            <div>
                <button onClick={funcDec}>-</button>
                <button onClick={funcInc}>+</button>
            </div>
        </>
    );
};
