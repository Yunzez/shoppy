import { Button, Accordion } from 'react-bootstrap'

export function User() {

    return (
        <div className="row mt-3">
            <div className="col-3 h-100 shadow-sm rounded me-auto">
                <div className="alig-item-center text-center">
                    <img style={{
                        border: '1px lightgrey solid',
                        height: '90%',
                        width: '90%',
                        borderRadius: '100%'
                    }} title="username" src='src/img/user.jpg'></img>
                    <h3>User Name </h3>
                    <Button variant="outline-danger">Log out</Button>
                </div>
                <hr></hr>
                <h5>User Info: </h5>
                <div>
                    <small>Email: 111@test.con</small>

                </div>
                <div>
                    <small>TEl: 111111</small>
                </div>

            </div>
            <div className="col-8 h-100 shadow-sm rounded me-auto">
                <h4 className='mt-3'>Summary</h4>
                <hr></hr>
                <div>
                    <span className="fs-4">Your purchases</span>
                    <Accordion className="mt-2">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                <small>here is one item you purchased</small>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                <small>here is one item you purchased</small>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <hr></hr>
                <span className="fs-4">Setting</span>


            </div>
        </div>

    )
}