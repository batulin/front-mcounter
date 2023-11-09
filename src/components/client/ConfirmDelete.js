import {Button, Modal} from "react-bootstrap";

const ConfirmDelete = ({show, onHide, client, deleteClient}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            keyboard={false}
        >
            <Modal.Header style={{color: "red"}} closeButton>
                <Modal.Title>Вы уверены?</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontSize: "1.2rem"}}>
                Вы действительно хотите удалить
            </Modal.Body>
            <Modal.Footer style={{display: "flex", justifyContent: "center"}}>
                <Button
                    variant="secondary"
                    style={{fontSize: "1.2rem"}}
                    onClick={onHide}>
                    Нет
                </Button>
                <Button
                    variant="danger"
                    style={{fontSize: "1.2rem"}}
                    onClick={deleteClient}
                >Да</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDelete;