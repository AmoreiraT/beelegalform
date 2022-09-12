import React from "react"
import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    Button,
    CardHeader,
    FormControl,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
    TextareaAutosize,
} from "@material-ui/core"
import { green } from "@material-ui/core/colors";
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import logo from "../assets/logo.png";
import styled from 'styled-components';
const Logo = styled.img`
width: 280px;
margin: 15px;
`;

const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

//Data
const initialValues = {
    empresa: "",
    nome: "",
    assunto: "",
    mensagem: "",
    occupation: "",
    telefone: "",
    country: "",
    email: "",
}


//validation schema
let validationSchema = Yup.object().shape({
    empresa: Yup.string().required("Required"),
    telefone: Yup.string().required("Required"),

    nome: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),

})

const UserForm = () => {
    const classes = useStyle()

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Grid container justify="center" spacing={1} style={{ background: 'linear-gradient(135deg,rgba(56,242,5,0.93) 0%,rgba(53,79,116,0.92) 100%)' }}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <Logo src={logo}></Logo>
                    <CardHeader title="Formulário"></CardHeader>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ dirty, isValid, values, handleChange, handleBlur }) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item container spacing={1} justify="center">
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Empresa"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="empresa"
                                                    value={values.empresa}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Nome Completo"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="nome"
                                                    value={values.nome}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Cargo"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="lastName"
                                                    value={values.lastName}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="email"
                                                    value={values.email}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="WhatsApp"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="telefone"
                                                    value={values.telefone}
                                                    component={TextField}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Assunto (opcional)"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="assunto"
                                                    value={values.assunto}
                                                    component={TextField}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography>
                                                    Sua Mensagem (opcional)
                                                </Typography>
                                                <TextareaAutosize
                                                    label="Sua Mensagem (opcional)"
                                                    aria-label="minimum height"
                                                    variant="outlined"

                                                    style={{ width: '98%', height: 200 }}
                                                />


                                            </Grid>

                                            <Grid item xs={12} sm={12} md={12}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="LGPD" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Compliance" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Contratos" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Inteligencia Artificial" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Machine Learning" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Sistema Gestão Jurídica (Escritórios)" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Sistema Gestão Jurídica (Empresas) " />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Visual Law" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Robôs de captura e integração" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Financeiro e Faturamento Integrados" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Workflow de Despesas" />
                                                    <FormControlLabel control={<Checkbox style={{ color: '#2FDF2F' }} sx={{
                                                        color: green[800],
                                                        '&.Mui-checked': {
                                                            color: green[600],
                                                        },
                                                    }} />} label="Soluções Mobile IOS e Android" />

                                                </FormGroup>

                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                            color="primary"
                                            style={{ background: 'linear-gradient(135deg,rgba(56,242,5,0.93) 0%,rgba(53,79,116,0.92) 100%)', width: '100%' }}
                                            type="Submit"
                                            className={classes.button}>
                                            Enviar
                                        </Button>
                                    </CardActions>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
    )
}

export default UserForm
