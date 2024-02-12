import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.string().min(1, { message: "Amount required." }),
});

type FormData = z.infer<typeof schema>;

const ProjectExpense = () => {
  let totalAmount = 0;
  // Manage state of the category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Manage state of the data in submit
  const [submission, setSubmissions] = useState<FormData[]>([]);

  // Manage state of print category
  const [printCategoryType, setPrintCategoryType] = useState("");

  const onSubmit = (data: FormData) => {
    setSubmissions([...submission, data]);
    console.log(submission);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setValue("category", selectedValue);
    setSelectedCategory(selectedValue);
  };

  const handlePrintCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrintCategoryType(event.target.value);
  };

  const handleDeletePrintCategory = (indexToDelete: any) => {
    const newSubmission = submission.filter(
      (_, index) => index !== indexToDelete
    );
    setSubmissions(newSubmission);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        Category
        <select
          className="form-select"
          id="category"
          {...register("category")}
          value={selectedCategory}
          onChange={handleSelectCategory}
        >
          <option value=""></option>
          <option value="groceries">Groceries</option>
          <option value="utitilies">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
        <br></br>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br></br>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handlePrintCategory}
        >
          <option value="">All categories</option>
          <option value="groceries">Groceries</option>
          <option value="utitilies">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {submission
              .filter((sub) => {
                if (printCategoryType !== "") {
                  if (sub.category === printCategoryType) {
                    totalAmount = sub.amount + totalAmount;
                    return sub;
                  } else {
                    return null;
                  }
                }
                totalAmount = sub.amount + totalAmount;
                return sub;
              })
              .map((sub, index) => (
                <tr key={index}>
                  <td>{sub.description}</td>
                  <td>{sub.amount}</td>
                  <td>{sub.category}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDeletePrintCategory(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            <tr>
              <td>Total</td>
              <td>{totalAmount} </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectExpense;
