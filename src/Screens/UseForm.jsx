import React, { useState } from "react"
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
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

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
  telefone: "",
  email: "",
  office: "",
  flg_lgpd: '0',
  flg_compliance: '0',
  flg_contratos: '0',
  flg_inteligencia_artificial: '0',
  flg_machine_learning: '0',
  flg_sistema_gestão_juridica_escritorios: '0',
  flg_sistema_gestão_juridica_empresas: '0',
  flg_visual_law: '0',
  flg_robos_de_captura_e_integracao: '0',
  flg_financeiro_e_faturamento_integrados: '0',
  flg_workflow_de_despesas: '0',
  flg_solucoes_mobile_ios_e_android: '0',
}

//validation schema
let validationSchema = Yup.object().shape({
  empresa: Yup.string().required("Required"),
  telefone: Yup.string().required("Required"),
  nome: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const UserForm = () => {
  const [dialogs, setDialogs] = useState({
    sucess: false
  });
  const [loading, setLoading] = useState(false);
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
    setDialogs({
      ...dialogs,
      sucess: true
    });
    handleAddData(values);
  }
  const handleAddData = async (values) => {
    setLoading(true);
    await delay(3);
    setLoading(false);
    // try {
    //   let save = await fetch('https://apps.beelegal.com.br/juridico_one/Integration/Save', {
    //     method: "POST",
    //     headers: {
    //       'Accept': "application/json",
    //       'Content-Type': "application/json",
    //       'auth': ''
    //     },
    //     body: JSON.stringify({
    //       tid: "VF9GRU5BX0xPVzowNzk4OTc=",
    //       fid: 409,
    //       data: {
    //         EMAIL: values.email,
    //         EMPRESA: values.empresa,
    //         FLG_COMPLIANCE: values.flg_compliance,
    //         FLG_CONTRATOS: values.flg_contratos,
    //         FLG_FINANCEIRO_E_FATURAMENTO_INTEGRADOS: values.flg_financeiro_e_faturamento_integrados,
    //         FLG_INTELIGENCIA_ARTIFICIAL: values.flg_inteligencia_artificial,
    //         FLG_LGPD: values.flg_lgpd,
    //         FLG_ROBOS_DE_CAPTURA_E_INTEGRACAO: values.flg_robos_de_captura_e_integracao,
    //         FLG_SISTEMA_GESTAO_JURIDICA_EMPRESAS: values.flg_sistema_gestão_juridica_empresas,
    //         FLG_SISTEMA_GESTAO_JURIDICA_ESCRITORIOS: values.flg_sistema_gestão_juridica_escritorios,
    //         FLG_SOLUCOES_MOBILE_IOS_E_ANDROID: values.flg_solucoes_mobile_ios_e_android,
    //         FLG_VISUAL_LAW: values.flg_visual_law,
    //         FLG_WORKFLOW_DE_DESPESAS: values.flg_workflow_de_despesas,
    //         NOME: values.nome,
    //         office: values.office,
    //         TELEFONE: values.telefone,
    //       }
    //     })
    //   });
    //   let resSave = await save.json();
    //   console.log(resSave);

    // } catch (errorSaveData) {
    //   console.log('error save data', errorSaveData)
    // }
  };

  const delay = (tempo) => new Promise(r => setTimeout(r, tempo * 1000));

  const handleOpenDialogs = (item) => (value) => {
    setDialogs({
      ...dialogs,
      [item]: true
    });
  }

  const handleCloseDialogs = (item) => (value) => {
    setDialogs({
      ...dialogs,
      [item]: false
    });
  }

  const finishSession = () => {
    window.location.reload();
    handleCloseDialogs('sucess');
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
                          name="office"
                          value={values.office}
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
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="WhatsApp"
                          variant="outlined"
                          fullWidth
                          name="telefone"
                          value={values.telefone}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={() => values.flg_lgpd = values.flg_lgpd === '0' ? '1' : '0'}
                                style={{ color: '#2FDF2F' }}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="LGPD"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_compliance = values.flg_compliance === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Compliance"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_contratos = values.flg_contratos === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Contratos"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_contratos = values.flg_contratos === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Inteligencia Artificial"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_machine_learning = values.flg_machine_learning === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Machine Learning"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_sistema_gestão_juridica_escritorios = values.flg_sistema_gestão_juridica_escritorios === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Sistema Gestão Jurídica (Escritórios)"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_sistema_gestão_juridica_empresas = values.flg_sistema_gestão_juridica_empresas === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Sistema Gestão Jurídica (Empresas)"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_visual_law = values.flg_visual_law === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Visual Law"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_robos_de_captura_e_integracao = values.flg_robos_de_captura_e_integracao === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Robôs de captura e integração"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_financeiro_e_faturamento_integrados = values.flg_financeiro_e_faturamento_integrados === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Financeiro e Faturamento Integrados"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_workflow_de_despesas = values.flg_workflow_de_despesas === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Workflow de Despesas"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: '#2FDF2F' }}
                                onChange={() => values.flg_solucoes_mobile_ios_e_android = values.flg_solucoes_mobile_ios_e_android === '0' ? '1' : '0'}
                                sx={{
                                  color: green[800],
                                  '&.Mui-checked': {
                                    color: green[600],
                                  },
                                }}
                              />
                            }
                            label="Soluções Mobile IOS e Android"
                          />
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
      <Dialog
        open={dialogs.sucess}
        onClose={handleCloseDialogs('sucess')}
      >
        <DialogTitle>
          { loading ? 'Salvando dados' : 'Titulo de agradecimento' }
        </DialogTitle>
        <DialogContent>
          {
            loading ?
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction="column"

              >
                <DialogContentText >
                  <CircularProgress style={{ color: 'rgba(56, 242, 5, 0.93)' }} />
                </DialogContentText>
              </Grid>
              :
              <DialogContentText >
                Mensagem de agradecimento
              </DialogContentText>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={finishSession} autoFocus style={{ display: loading ? 'none' : 'block' }} >
            <h4 style={{ color: 'rgba(56, 242, 5, 0.93)' }} >Certo!</h4>
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default UserForm
