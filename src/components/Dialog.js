import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Dialog(props) {
    let {recipe} = props;
  const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Ingredients</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <table>
            <thead>
                <th>
                    Ingredient
                </th>
                <th>
                    Weight
                </th>
            </thead>
            <tbody className='ing-desc' >
                {recipe.ingredients.map((ingredientObj) =>(
                    <tr>
                        <td>{ingredientObj.text}</td>
                        <td>{ingredientObj.weight}</td>
                    </tr>
                ) )}
                
            </tbody>
        </table>
            </MDBModalBody>

            <MDBModalFooter>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}