import "antd/dist/antd.css";
import {Button, Col, Form, Input, Row} from "antd";
import logoAvanzo from "../../assets/logo_avanzo.png";
import "./LoginPage.css";

export const LoginPage = () => {


  const [form] = Form.useForm();

  const handleSubmit =(value)=>{
    console.log(form)
    console.log(value)
  }

	return (   
		<>
			<Row align="middle" id="main-row" style={{height: "100vh"}}>
				<Col
					// xxl={6}
					// lg={6}
					// md={6}
					// sm={10}
					// xs={12}
					offset={1}
					// style={{backgroundColor: "cornflowerblue"}}
				>
					<img
						src={logoAvanzo}
						className=""
						alt="Avanzo"
						style={{height: "100px", marginBottom: "20px"}}
					/>

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">
								Acceso al Sistema Consulta y Actualización de Datos Avanzo
								SISCADA
							</h3>
						</div>

						<div className="panel-body">
							<p>
								Bienvenido. Por favor ingrese sus credenciales para iniciar
								sesión.
							</p>
							<Form name="LoginForm" layout="vertical" onFinish={handleSubmit}>
								<div className=" form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
									<Form.Item
										label="Usuario"
										// style={{backgroundColor: "salmon"}}
									>
										<Input
											type="email"
											name="username"
											// value="<?php echo $username; ?>"
											placeholder="Ej:user@gmail.com"
										/>
										<span className="help-block">
											{/*<?php echo $username_err; ?>*/}
										</span>
									</Form.Item>
									<Form.Item
										label="Contraseña"
										// style={{backgroundColor: "salmon"}}
									>
										<div className="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
											<Input.Password
												name="password"
												placeholder="*******"
											/>
											<span className="help-block">
												{/*<?php echo $password_err; ?>*/}
											</span>
										</div>
									</Form.Item>

									<Form.Item
										// style={{backgroundColor: "yellow"}}
										wrapperCol={{offset: 8}}
									>
										<Button type="primary" htmlType="submit" className="btn btn-primary">
											Ingresar
										</Button>
									</Form.Item>
									{/* <p>¿No tienes una cuenta? <a href="register.php">Regístrate ahora</a>.</p> */}
								</div>
							</Form>
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};
