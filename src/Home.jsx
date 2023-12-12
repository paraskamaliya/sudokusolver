import React from "react";
import { useState } from "react";
import { Box, Button, Flex, Heading, PinInput, PinInputField } from "@chakra-ui/react";

const Home = () => {
    const [rows, setRows] = useState(["", "", "", "", "", "", "", "", ""]);

    const handleChange = (value, index) => {
        const newRows = [...rows];
        newRows[index] = value;
        setRows(newRows);
    };
    function sudokusolve(rows, i, j) {
        let sudoku = [];
        if (i === 9) {
            for (let i = 0; i < 9; i++) {
                console.log(sudoku[i].join(" "));
            }
            return true;
        }
        for (let i = 0; i < rows.length; i++) {
            sudoku.push(rows[i].split("").map(Number));
        }
        let ni = 0;
        let nj = 0;
        if (j === 8) {
            ni = i + 1;
            nj = 0;
        } else {
            ni = i;
            nj = j + 1;
        }
        if (sudoku[i][j] !== 0) {
            return sudokusolve(sudoku, ni, nj);
        } else {
            for (let item = 1; item <= 9; item++) {
                if (isSafe(sudoku, item, i, j)) {
                    sudoku[i][j] = item;
                    if (sudokusolve(sudoku, ni, nj)) {
                        return true;
                    }
                    sudoku[i][j] = 0;
                }
            }
        }
        return false;
    }

    function isSafe(sudoku, number, row, col) {
        for (let i = 0; i < 9; i++) {
            if (sudoku[row][i] === number || sudoku[i][col] === number) {
                return false;
            }
        }
        let bi = Math.floor(row / 3) * 3;
        let bj = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (sudoku[bi + i][bj + j] === number) {
                    return false;
                }
            }
        }
        return true;
    }
    return (
        <Box bg={"black"} color={"white"} height={"100vh"} textAlign={"center"} >
            <Heading>Sudoku Solver</Heading>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <Flex key={index} justifyContent={"center"} gap={1} direction={"row"} m={1}>
                    <PinInput value={rows[index]} onChange={(value) => handleChange(value, index)} >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((subIndex) => (
                            <PinInputField key={subIndex} />
                        ))}
                    </PinInput>
                    <br />
                </Flex>
            ))}
            <Button colorScheme="green" onClick={() => {
                sudokusolve(rows, 0, 0)
            }}>Solve</Button>
        </Box>
    );
};

export default Home;
