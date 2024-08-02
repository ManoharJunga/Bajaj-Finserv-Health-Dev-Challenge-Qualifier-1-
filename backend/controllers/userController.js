import User from '../models/User.models.js'

export const createUser = async (req, res) => {
    const { full_name, ddmmyyyy, college_email_id, college_roll_number, numbers, alphabets } = req.body;

    try {
        const user = new User({
            full_name,
            ddmmyyyy,
            college_email_id,
            college_roll_number,
            numbers,
            alphabets
        });

        await user.save();

        res.json({
            is_success: true,
            user_id: `${full_name}_${ddmmyyyy}`,
            college_email_id,
            college_roll_number,
            numbers,
            alphabets
        });
    } catch (err) {
        res.status(400).json({
            is_success: false,
            user_id: `${full_name}_${ddmmyyyy}`
        });
    }
};

export const getOperationCode = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};
