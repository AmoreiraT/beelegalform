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
import MaskedInput from "react-text-mask";
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
  office: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const phoneNumberMask = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const UserForm = () => {
  const [dialogs, setDialogs] = useState({
    sucess: false,
    consentForm: false,
    selectAProduct: false,
  });
  const [valuesForm, setValuesForm] = useState();
  const [FLG_ACORDO, setFLG_ACORDO] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyle();

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

  const onSubmit = (values) => {
    console.log(values)
    setDialogs({
      ...dialogs,
      sucess: true
    });
    handleAddData(values);
  }

  const handleAddData = async (values) => {
    setDialogs({
      ...dialogs,
      sucess: true
    });
    setLoading(true);
    await delay(3);
    try {
      let save = await fetch('https://apps.beelegal.com.br/juridico_one/Integration/Save', {
        method: "POST",
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
          'auth': ''
        },
        body: JSON.stringify({
          tid: "VF9GRU5BTEFXOjA2ODkwOA==",
          fid: 410,
          data: {
            EMAIL: valuesForm.email,
            EMPRESA: valuesForm.empresa,
            FLG_COMPLIANCE: valuesForm.flg_compliance,
            FLG_CONTRATOS: valuesForm.flg_contratos,
            FLG_FINANCEIRO: valuesForm.flg_financeiro_e_faturamento_integrados,
            FLG_IA: valuesForm.flg_inteligencia_artificial,
            FLG_LGPD: valuesForm.flg_lgpd,
            FLG_ROBO: valuesForm.flg_robos_de_captura_e_integracao,
            FLG_EMPRESA: valuesForm.flg_sistema_gestão_juridica_empresas,
            FLG_ESCRITORIO: valuesForm.flg_sistema_gestão_juridica_escritorios,
            FLG_MOBILE: valuesForm.flg_solucoes_mobile_ios_e_android,
            FLG_VISUAL: valuesForm.flg_visual_law,
            FLG_DESPESA: valuesForm.flg_workflow_de_despesas,
            NOME: valuesForm.nome,
            CARGO: valuesForm.office,
            WHATSAPP: valuesForm.telefone,
            FLG_ACORDO: FLG_ACORDO ? '1' : '0',
            FLG_ML: valuesForm.flg_machine_learning
          }
        })
      });
    } catch (errorSaveData) {
      console.log('error save data', errorSaveData)
    }
    setLoading(false);
  };

  const handleConsentAccept = (values) => {
    if (
      values.flg_compliance === "0" &&
      values.flg_contratos === "0" &&
      values.flg_financeiro_e_faturamento_integrados === "0" &&
      values.flg_inteligencia_artificial === "0" &&
      values.flg_lgpd === "0" &&
      values.flg_machine_learning === "0" &&
      values.flg_robos_de_captura_e_integracao === "0" &&
      values.flg_sistema_gestão_juridica_empresas === "0" &&
      values.flg_sistema_gestão_juridica_escritorios === "0" &&
      values.flg_solucoes_mobile_ios_e_android === "0" &&
      values.flg_visual_law === "0" &&
      values.flg_workflow_de_despesas === "0"
    ) {
      setDialogs({
        ...dialogs,
        selectAProduct: true
      });
      console.log('Quem chega', values)
    } else {
      setDialogs({
        ...dialogs,
        consentForm: true
      });
      setValuesForm(values);
      console.log('Quem chega', values)
    }
  }

  const delay = (tempo) => new Promise(r => setTimeout(r, tempo * 1000));

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
            onSubmit={(initialValues) => handleConsentAccept(initialValues)}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
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
                          render={({ field }) => (
                            <MaskedInput
                              style={{
                                width: '95%',
                                height: 30,
                                padding: 10,
                                border: '1px solid #ccc',
                                borderRadius: 5,
                              }}
                              {...field}
                              mask={phoneNumberMask}
                              id="telefone"
                              placeholder="Digite seu whatsapp com DDD"
                              type="text"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            />
                          )}
                          value={values.telefone}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <FormGroup>
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
                                onChange={() => values.flg_inteligencia_artificial = values.flg_inteligencia_artificial === '0' ? '1' : '0'}
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
          {loading ? 'Salvando dados' : 'Titulo de agradecimento'}
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
          <Button variant="contained" onClick={finishSession} style={{ display: loading ? 'none' : 'block', color: '#fff', backgroundColor: '#f00' }} autoFocus >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={dialogs.consentForm}
        onClose={handleCloseDialogs('consentForm')}
      >
        <DialogTitle>
          Declaração de privacidade e proteção de dados pessoais
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            xs={12}
          >
            <Grid item>
              <Typography variant='p' component='div'>
                Coletamos seus dados com a finalidade de realizar promoções
                e enviar informações ou realizar contato a respeito de nossas promoções,
                produtos e serviços que realizamos.
                Armazenamos seus dados pessoais de forma segura e não os compartilhamos com terceiros.
                A qualquer tempo, você poderá solicitar seu descredenciamento ou
                atualização de seus dados nas plataformas WhatsApp e e-mail Marketing
                que utilizamos ou através do canal do titular, disponibilizado em
                nosso site, em
                <a
                  style={{
                    color: 'rgba(56, 242, 5, 0.93)'
                  }}
                  target="_blank"
                  href='https://beelegal.com.br/'
                >
                  beelegal.com.br
                </a>
              </Typography>
            </Grid>
            <Grid
              container
              item
              justifyContent='center'
              alignItems='center'
              style={{ marginTop: 15 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: 'rgba(56, 242, 5, 0.93)' }}
                    checked={FLG_ACORDO}
                    onChange={() => setFLG_ACORDO(!FLG_ACORDO)}
                  />
                }
                label="Estou de acordo, desejo continuar"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseDialogs('consentForm')} style={{ color: '#fff', backgroundColor: '#f00' }} autoFocus>
            Cancelar
          </Button>
          <Button disabled={!FLG_ACORDO} variant="contained" onClick={handleAddData} style={{ color: '#fff', backgroundColor: FLG_ACORDO ? 'rgba(56, 242, 5, 0.93)' : '#ccc' }} >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={dialogs.selectAProduct}
        onClose={handleCloseDialogs('selectAProduct')}
      >
        <DialogTitle>
          Aviso!
        </DialogTitle>
        <DialogContent>
          <DialogContentText >
            Selecione ao menos um produto
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseDialogs('selectAProduct')} style={{ display: loading ? 'none' : 'block', color: '#fff', backgroundColor: '#f00' }} autoFocus >
            Entendi!
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default UserForm;