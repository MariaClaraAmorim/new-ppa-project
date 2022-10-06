<?php

include_once 'banco.php';

class Aluno{
    public $id;
    public $nome;
    public $telefone;
    public $email;
    public $tipo;
    public $CPF;

    function __construct($nome, $telefone, $email, $curso, $nascimento, $sexo)
    {
        $this-> nome = $nome;
        $this-> telefone = $telefone;   
        $this-> email = $email;
        $this-> curso = $curso;
        $this->nascimento = new DateTime($nascimento);
        $this-> sexo = $sexo;
    }
    function inserir(){
        $banco = new Banco();
        $conexao = $banco->conectar();
        try{
            $stmt = $conexao -> prepare ("insert into aluno (nome, id_curso, telefone, email, nascimento, sexo) values (:nome, :id_curso, :telefone, :email, :nascimento, :sexo)");
            $stmt -> bindParam (':nome', $this-> nome);
            $stmt -> bindParam (':id_curso', $this-> curso);
            $stmt -> bindParam (':telefone', $this-> telefone);
            $stmt -> bindParam (':email', $this-> email);
            $stmt -> bindParam (':nascimento', $this-> nascimento->format('Y/m/d'));
            $stmt -> bindParam (':sexo', $this->sexo);
            $stmt -> execute();
        } catch (PDOException $ex) {
            echo "Erro ao inserir aluno: " . $ex; 
        
        }

    }
    function excluir(){ 
        $banco = new Banco();
        $conexao = $banco->conectar();
        try{
            $stmt = $conexao -> prepare ("DELETE FROM aluno WHERE id_aluno = :ID_ALUNO");
            $stmt -> bindParam (':ID_ALUNO', $this-> id);
            $stmt -> execute();
        } catch (PDOException $ex) {
            echo "Erro" . $ex; 
        
        }
    }
        function editar()
        {
            $banco = new Banco();
            $conexao = $banco->conectar();
            try{
                $stmt = $conexao -> prepare ("UPDATE aluno SET nome = :nome, telefone =:telefone, email=:email, nascimento=:nasciemento, sex=:sexo where id_aluno=:id_aluno);
                $stmt -> bindParam (':nome', $this->nome);
                //$stmt -> bindParam (':id_curso', $this->curso);
                $stmt -> bindParam (':telefone', $this->telefone);
                $nasc =$this->nascimento->format('Y/m/d');
                $stmt -> bindParam (':nascimento', $nasc);
                $stmt -> bindParam (':sexo', $this->sexo);
                $stmt -> bindParam (':id_aluno', $this->id_aluno);
                } catch (PDOException . $ex) {
            echo "Erro ao alterar aluno: " . $ex; 
            }
        }
    
        function getIdade()
        {
            if (isset($this->$nascimento)){
            $agora = new DateTime();
            $idade = $agora->diff ($this->nascimento);
            return $idade->y;
        }
            return -1;
    }
        static function carregar($id_aluno){
            try {
                $banco = new Banco();
                $conexao = $banco -> conectar();
                $stmt = $conexao->prepare("select * from aluno WHERE id_aluno = :id_aluno");
                $stmt->bindParam(':id_aluno', $id_aluno);
                $stmt ->execute();
                $result = $stmt->setFetchMode( PDO::FETCH_ASSOC);
                $aluno = null;
                foreach ($stmt -> fetchAll() as $v => $value){
                    $aluno = new Aluno (
                        $value['nome'],
                        $value['telefone'],
                        $value['email'],
                        $value['id_curso'],
                        date ($value['nascimento']),
                        $value['sexo']
                        $aluno ->id = $value['id_aluno'];
                }
                return $aluno;
            } catch (PDOException $ex){
                echo 'Erro: ' . $ex->getMessage();
            }
        }
    }
 