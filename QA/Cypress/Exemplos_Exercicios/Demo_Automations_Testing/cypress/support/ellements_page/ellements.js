class ellements {

    CampoPáginaContainner = () => { return '#section > .container > .row' }

    campoFirstName = () => { return 'nth-child(1) > :nth-child(2) > .form-control' };
    campoLastName = () => { return ':nth-child(1) > :nth-child(3) > .form-control' };
    campoAdress = () => { return '.col-md-8 > .form-control' };
    campoEmail = () => { return ':nth-child(4) > .col-md-4 > .form-control' };
    campoPhone = () => { return '#eid > .form-control' };
    botaoSubmit = () => { return '#submitbtn' };
}

export default ellements;

