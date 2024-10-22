import { useState, useEffect } from "react";


const Comment = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        message: "",
        rating: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        let errors = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters";
        }

        if (!values.message.trim()) {
            errors.message = "Message is required";
        } else if (values.message.length < 10) {
            errors.message = "Message must be at least 10 characters";
        }

        if (!values.rating) {
            errors.rating = "Rating is required";
        } else if (values.rating < 1 || values.rating > 5) {
            errors.rating = "Rating must be between 1 and 5";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
        }
    };

    useEffect(() => {
        if (isSubmitting) {
            const newEntry = { ...formValues };

            setSubmittedData((prevData) => [...prevData, newEntry]);

            setFormValues({
                name: "",
                message: "",
                rating: ""
            });

            setIsSubmitting(false);
        }
    }, [isSubmitting]);

    return (
        <div className="comment-box">
            <form onSubmit={handleSubmit}>
                <label>Name :- </label>
                <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                {formErrors.name && <span>{formErrors.name}</span>}
                <br />

                <label>Massage :- </label>
                <input type="text" name="message" value={formValues.message} onChange={handleChange} />
                {formErrors.message && <span>{formErrors.message}</span>}
                <br />

                <label>Rating :- </label>
                <input type="number" name="rating" value={formValues.rating} onChange={handleChange} />
                {formErrors.rating && <span>{formErrors.rating}</span>}
                <br />

                <button>Submit</button>
            </form>

            <h2>Comments</h2>
            <ul>
                {submittedData.map((data, index) => (
                    <li key={index} className="comment">
                        <h4>{data.name}</h4>
                        <p>{data.message}</p>
                        <button>Ratting : {data.rating}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;