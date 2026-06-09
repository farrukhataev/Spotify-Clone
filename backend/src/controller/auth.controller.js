import {User} from "../models/user.model.js"

export const authCallback = async (req, res, next) => {
  try {
    // Если этот лог не появится в терминале VS Code, 
    // значит запрос блокируется ДО попадания в контроллер (CORS или Middleware)
    console.log("ЗАПРОС ПРИШЕЛ. BODY:", req.body);

    const { id, firstName, lastName, imageUrl } = req.body;
    
    // Временная заглушка, чтобы проверить запись в БД
    const newUser = await User.create({
        clerkId: id || "temp_id",
        fullName: `${firstName} ${lastName}`,
        image: imageUrl || "none",
    });
    
    res.status(200).json({ success: true, user: newUser });
  } catch (error) {
    console.error("ОШИБКА:", error);
    res.status(500).json({ message: error.message });
  }
};