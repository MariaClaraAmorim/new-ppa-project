import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import TextareaAutosize from "@mui/material/TextareaAutosize";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

import css from "./styles.module.css";
import { Button } from "@chakra-ui/button";
import { Upload } from "../../../components/ui/Dialog/Upload";
import { Quantity } from "../../../components/ui/Quantity";

function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function CadProduto() {
  const [value, setValue] = React.useState("categoria");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [valueProd, setValueProd] = React.useState("produto");

  const handleChangeProd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueProd((event.target as HTMLInputElement).value);
  };

  return (
    <section className={css.teste}>
      <h1 className={css.title}>Cadastrar produto</h1>
      <div>
        <p className={css.description}></p>
      </div>
      <div className={css.grid}>
        <div>
          <FormControl>
            <FormLabel id="demo-customized-radios">Categoria</FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
              <FormControlLabel
                value="female"
                control={<BpRadio />}
                label="Categoria 1"
              />
              <FormControlLabel
                value="caegoria2"
                control={<BpRadio />}
                label="Categoria 2"
              />
              <FormControlLabel
                value="categoria3"
                control={<BpRadio />}
                label="Categoria 3"
              />
              <FormControlLabel
                value="categoria4"
                control={<BpRadio />}
                label="Categoria 4"
              />

              <FormControlLabel
                value="categoria5"
                control={<BpRadio />}
                label="Categoria 5"
              />
              <FormControlLabel
                value="other"
                control={<BpRadio />}
                label="Categoria 6"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          <FormControl>
            <FormLabel id="demo-customized-radios">Tipo de produto</FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
              <FormControlLabel
                value="female"
                control={<BpRadio />}
                label="Unitário"
              />
              <FormControlLabel
                value="male"
                control={<BpRadio />}
                label="Atacado"
              />
            </RadioGroup>
          </FormControl>

          <div>
            <p>Quantidade</p>
            <Quantity />
          </div>
        </div>

        <div>
          <div>
            <p>Decrição</p>

            <TextareaAutosize
              maxRows={10}
              defaultValue=""
              style={{
                width: 300,
                height: 100,
                backgroundColor: "#D9D9D9",
                border: "1px solid",
                fontSize: "0.9em",
                padding: "5px"
              }}
            />
          </div>
          <div>
            <p>Especificação</p>

            <TextareaAutosize
              maxRows={10}
              defaultValue=""
              style={{
                width: 300,
                height: 100,
                backgroundColor: "#D9D9D9",
                border: "1px solid",
                fontSize: "0.9em",
                padding: "5px"
              }}
            />
          </div>
        </div>

        <div>
          <p>Nota Fiscal</p>
          <Upload/>
        </div>

        <div>
          <p>Nome do Produto</p>
          <TextField id="filled-basic" label="Filled" variant="outlined" className={css.inputName}/>
        </div>

      </div>

      <div className={css.action}>
        <a href="/Admin/Home">
          <Button className={css.btn} variant="contained">
            Voltar
          </Button>
        </a>
        <Button className={css.btn} variant="contained">
          Cadastrar
        </Button>
      </div>
    </section>
  );
}

export { CadProduto };
