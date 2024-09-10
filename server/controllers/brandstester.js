const db = require("../models");

const multer = require("multer");
const path = require("path");

//create main model
const Brands = db.Goodstester;
const Cont = db.Controlstester;
const Mat = db.materialstester;

const updateBrands = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        heattreatment: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands2 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        hydraulictesting: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands3 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        uzk: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands4 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        rgd: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands5 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        othersdocs: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands6 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        vik: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands7 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        technicalsolution: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands8 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        vsrnm: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands9 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        reportingpassport: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands10 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        directionlink: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Cont.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands11 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        opinionlink: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Cont.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands12 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        heattreatment2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands13 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        hydraulictesting2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands14 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        uzk2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands15 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        rgd2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands16 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        othersdocs2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands17 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        vik2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands18 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        technicalsolution2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands19 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        vsrnm2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands20 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        reportingpassport2: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Brands.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands21 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        pki: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Mat.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const updateBrands22 = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
      let info = {
        sertificate: req.file.originalname,
      };
      //if (req.file) {
        //const img = req.file.path;
        //info.heattreatment = img;
      //}
      let brands = await Mat.update(info, { where: { id: id } });
      console.log("its"+brands);
      res.status(200).send("Brand updated");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Термообработка");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Гидравлическиеипытания(акты)");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage3 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/УЗК");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage4 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/РГД");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage5 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Прочиедокументы");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage6 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/ВИК");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage7 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Технологическиерешения");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage8 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/ВСНРМ");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage9 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Отчётныйпасп");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });







  const storage10 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Направления");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage11 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Заключения");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage12 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/ПКИ");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const storage13 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/build/Texserver/Сертификаты");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });








  const upload = multer({
    storage: storage,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(file.originalname);
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uheat")

  const upload2 = multer({
    storage: storage2,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uhydra")

  const upload3 = multer({
    storage: storage3,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsuzk")

  const upload4 = multer({
    storage: storage4,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsrgd")

  const upload5 = multer({
    storage: storage5,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uother")

  const upload6 = multer({
    storage: storage6,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsvik")

  const upload7 = multer({
    storage: storage7,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("utechsol")

  const upload8 = multer({
    storage: storage8,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uvsr")

  const upload9 = multer({
    storage: storage9,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("ureppas")

  const upload10 = multer({
    storage: storage10,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(file.originalname);
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("dirlink")

  const upload11 = multer({
    storage: storage11,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(file.originalname);
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("opinlink")








  const upload12 = multer({
    storage: storage,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(file.originalname);
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uheat2")

  const upload13 = multer({
    storage: storage2,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uhydra2")

  const upload14 = multer({
    storage: storage3,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsuzk2")

  const upload15 = multer({
    storage: storage4,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsrgd2")

  const upload16 = multer({
    storage: storage5,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uother2")

  const upload17 = multer({
    storage: storage6,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uitsvik2")

  const upload18 = multer({
    storage: storage7,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("utechsol2")

  const upload19 = multer({
    storage: storage8,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("uvsr2")

  const upload20 = multer({
    storage: storage9,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("ureppas2")

  const upload21 = multer({
    storage: storage12,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("upk")

  const upload22 = multer({
    storage: storage13,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /pdf|docx|doc|zip|rar|7z/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).single("usert")
  
  module.exports = {
    updateBrands,
    updateBrands2,
    updateBrands3,
    updateBrands4,
    updateBrands5,
    updateBrands6,
    updateBrands7,
    updateBrands8,
    updateBrands9,
    updateBrands10,
    updateBrands11,
    updateBrands12,
    updateBrands13,
    updateBrands14,
    updateBrands15,
    updateBrands16,
    updateBrands17,
    updateBrands18,
    updateBrands19,
    updateBrands20,
    updateBrands21,
    updateBrands22,
    upload,
    upload2,
    upload3,
    upload4,
    upload5,
    upload6,
    upload7,
    upload8,
    upload9,
    upload10,
    upload11,
    upload12,
    upload13,
    upload14,
    upload15,
    upload16,
    upload17,
    upload18,
    upload19,
    upload20,
    upload21,
    upload22,
  };