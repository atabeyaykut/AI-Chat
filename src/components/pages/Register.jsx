import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useUser } from '../../contextAPI/UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { login } = useUser();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        login(data)
        mutation.mutate(data);
        navigate("/chat")
    }

    const mutation = useMutation({
        mutationFn: async (data) => {
            try {
                const response = await axios.post("/api/send-mail", {
                    to: data.email,
                    subject: "Registration Information",
                    text: `Hello ${data.username},\n\n\nUsername: ${data.username}\nPassword: ${data.password}\n\nThank you for registering.`
                });
                return response.data;
            } catch (error) {
                throw new Error("Something went wrong");
            }
        },
        onSuccess: () => {
            toast.success("Registration successful, email sent!");
        },
        onError: (error) => {
            toast.error(error.message || "Something went wrong");
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    {...register("username", { required: "How can I call you?" })}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Please enter a password",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 characters please"
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z]).{3,}$/,
                            message: "One uppercase and one lowercase letter"
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "I need your email",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email"
                        }
                    })}
                    placeholder="example@example.com"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;
