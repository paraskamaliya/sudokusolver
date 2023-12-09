import React from "react";
import { useState } from "react";
import { Box, Button, Heading, PinInput, PinInputField } from "@chakra-ui/react";

const Home = () => {
    const [rows, setRows] = useState(["", "", "", "", "", "", "", "", ""]);

    const handleChange = (value, index) => {
        const newRows = [...rows];
        newRows[index] = value;
        setRows(newRows);
    };
    console.log(rows);
    return (
        <Box bg={"black"} color={"white"} height={"100vh"} textAlign={"center"}>
            <Heading>Sudoku Solver</Heading>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <React.Fragment key={index}>
                    <PinInput value={rows[index]} onChange={(value) => handleChange(value, index)}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((subIndex) => (
                            <PinInputField key={subIndex} />
                        ))}
                    </PinInput>
                    <br />
                </React.Fragment>
            ))}
            <Button colorScheme="green">Solve</Button>
        </Box>
    );
};

export default Home;
