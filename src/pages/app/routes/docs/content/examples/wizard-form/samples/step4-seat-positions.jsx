import cln from "classnames";
import React from "react";

export const Step4SeatPositions = ({fv, onNext}) => {

    const positions = fv.getValue();

    const allPositions = [
        "10A",
        "10B",
        "10C",
        "11A",
        "11B",
        "11C",
    ];

    return (
        <div>
            <div>
                {allPositions.map((p) => (
                    <div
                        style={{
                            ...s.position,
                            ...(positions && positions.indexOf(p) > -1 ? s.selected : null)
                        }}
                        onClick={() => fv.pushValue(positions && positions.indexOf(p) > -1 ?
                            positions.filter((p1) => p1 !== p) :
                            [...(positions || []), p]
                        )}
                    >
                        {p}
                    </div>
                ))}
            </div>

            <button
                disabled={!fv.isValid()}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
};

const s = {
    selected: {
        fontWeight: "bold",
        background: "#145ad8",
        color: "white",
    },
    position: {
        border: "1px solid grey",
        padding: "3px 10px",
        display: "inline-block",
    },
};